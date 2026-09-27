export const name="lucid_1-arrow-down-z-a";
export const id="dl_e668103f3a0449059ff0";
export const url=new URL("../icons/lucid_1-arrow-down-z-a.svg?v=4c866124f6f44afc97392bb1edaf213cf16d7087ce2d3338d96e3236bd4e262d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
