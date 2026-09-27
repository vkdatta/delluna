export const name="number-four-thin";
export const id="dl_95f4a96be2d846b79415";
export const url=new URL("../icons/number-four-thin.svg?v=076d21df958fd61bffa09eb56099af8eb10eca8712c0d7493bc5831ce27ff785",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
