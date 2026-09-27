export const name="scales-thin";
export const id="dl_210a9f6aca525a93777d";
export const url=new URL("../icons/scales-thin.svg?v=7f31839c45464b49bbcd7fff75458e7dce02decded71091ffe6bd8066753b0c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
