export const name="arrow-elbow-left-thin";
export const id="dl_f1ec34a800b3467eb001";
export const url=new URL("../icons/arrow-elbow-left-thin.svg?v=0bf35ce4b951d37e3ad6e61ec9a00ac7a5c72ed46d86edf3a4d63599132f10ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
