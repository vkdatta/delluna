export const name="keyboard-thin";
export const id="dl_e9d74cfcf2f042c78db6";
export const url=new URL("../icons/keyboard-thin.svg?v=84b201f73d6de129ef070d533950c2403d51019f448014b6968296a82045c163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
