export const name="text-aa-thin";
export const id="dl_772696b9dce24cb9b1c2";
export const url=new URL("../icons/T/text-aa-thin.svg?v=fa004098c1d9f819acb67b08baf0edfde974e431db0698a4843fed2bb52f633f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
