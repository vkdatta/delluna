export const name="hand-coins-light";
export const id="dl_6bb1fc33b08441d4b5e2";
export const url=new URL("../icons/hand-coins-light.svg?v=1d9abd49069482bf2361dd25c6b20536b8fc451a5619202375de9140694439ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
