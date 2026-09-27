export const name="contactless";
export const id="dl_e54fd9b6aa7e62230a35";
export const url=new URL("../icons/contactless.svg?v=02392bf82e5523b6d3cd5e413a26e3c5b30b85e2ddb1cba352ca1b0921341105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
