export const name="coin-thin";
export const id="dl_84a8235729314bbdb3e7";
export const url=new URL("../icons/coin-thin.svg?v=9fdf18e501f318b75363aa6d474406a74518eb8fcd645df24bdd82cca38a0757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
