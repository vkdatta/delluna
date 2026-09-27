export const name="number-circle-four-thin";
export const id="dl_e1c70b34ee114bc392ee";
export const url=new URL("../icons/number-circle-four-thin.svg?v=4d65d427e2ee0489db6ce17fe827538968df2d9dda4692814a9774d6618cd849",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
