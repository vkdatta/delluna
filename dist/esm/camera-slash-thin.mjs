export const name="camera-slash-thin";
export const id="dl_46c415d5470b4d0993c2";
export const url=new URL("../icons/camera-slash-thin.svg?v=fc1caafcf7cdbf896617a7699dfe1dfb099a397682ce41a47aa0999c88134bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
