export const name="podiatry";
export const id="dl_4be0a984823c9315723f";
export const url=new URL("../icons/podiatry.svg?v=c89d00192001e6d206706d7b48577d79bba4bc54fe79048b25ac1ceb8ff23272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
