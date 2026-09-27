export const name="game_button_l1";
export const id="dl_ecd5ab7c611e8c48280f";
export const url=new URL("../icons/game_button_l1.svg?v=93bf9a8acd6ffc17bc297e87ded2c85b5e1813938379a335afbf84385aa6f85c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
