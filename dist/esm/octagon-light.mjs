export const name="octagon-light";
export const id="dl_1687962d9c59467bad8d";
export const url=new URL("../icons/octagon-light.svg?v=1441873b385b51aedd557dbb211c473a31c42efbf3bb66e366a487ff74b1df06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
