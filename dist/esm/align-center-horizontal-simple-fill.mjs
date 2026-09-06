export const name="align-center-horizontal-simple-fill";
export const id="dl_e4cef394f896487396b2";
export const url=new URL("../icons/align-center-horizontal-simple-fill.svg?v=68f19f3c539982a658dbacb6844d819df76ff3389e8d371b0046764d75c3b6d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
