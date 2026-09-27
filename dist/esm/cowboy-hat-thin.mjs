export const name="cowboy-hat-thin";
export const id="dl_d93897d5e42c4dfe910b";
export const url=new URL("../icons/cowboy-hat-thin.svg?v=cf11f09c50b51457325dc58fd6e4184ab860f307a0d176f6bda11a7464077512",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
