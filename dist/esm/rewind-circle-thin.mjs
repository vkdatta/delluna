export const name="rewind-circle-thin";
export const id="dl_5da96483416b40cc9f41";
export const url=new URL("../icons/rewind-circle-thin.svg?v=b89154f821da05b740aa37cee19becff48fd6a3000db8dfdd8244d8f845d51a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
