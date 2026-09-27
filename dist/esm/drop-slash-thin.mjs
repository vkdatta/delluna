export const name="drop-slash-thin";
export const id="dl_3b0ac7f1ec7e4ee6b459";
export const url=new URL("../icons/drop-slash-thin.svg?v=5a8927ee17711caf182fc0e7ce694f86253ba642cd3ab0b8e3e14bd0874e3013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
