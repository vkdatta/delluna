export const name="triangle-dashed-thin";
export const id="dl_6f794ef4a6ab462da0ae";
export const url=new URL("../icons/T/triangle-dashed-thin.svg?v=f5a7bf4aca5bd45a16afc43c9e96beaa73fd963348b8e311d2ef94e885d83d6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
