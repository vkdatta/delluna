export const name="flower-thin";
export const id="dl_4fffc55b1260490d9e14";
export const url=new URL("../icons/flower-thin.svg?v=a5ee8319a30b617c7e75ebfacc22f698e55ac9c566d0f823896d6db7f89d3f3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
