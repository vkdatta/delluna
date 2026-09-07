export const name="skip-forward-thin";
export const id="dl_ff67382df5444adb9e38";
export const url=new URL("../icons/S/skip-forward-thin.svg?v=c67ac480100e7afc7560b0ec1ee040ed33d9c57df43aed63d09bd95eafef5152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
