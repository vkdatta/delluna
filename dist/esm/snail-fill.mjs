export const name="snail-fill";
export const id="dl_a2312843b9a9807195eb";
export const url=new URL("../icons/snail-fill.svg?v=12affcfc05362be1a3cacaabdf79b55fc043e7735ff5d3e43fa15d2dd86070b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
