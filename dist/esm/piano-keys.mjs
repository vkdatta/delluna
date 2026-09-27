export const name="piano-keys";
export const id="dl_4ce26d8b9c254cdbb855";
export const url=new URL("../icons/piano-keys.svg?v=aca27ba09287acf98da1ead85005ba618dd40162b91a55fed86bfed22dfea957",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
