export const name="snowshoeing-fill";
export const id="dl_78fb6157eacd95116cbe";
export const url=new URL("../icons/snowshoeing-fill.svg?v=a3300ea7d8f6ab41fcee616bda2bc9b6b9acee8d00dd20107cde575c377125b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
