export const name="caret-up-thin";
export const id="dl_4a9ed750b90444408603";
export const url=new URL("../icons/caret-up-thin.svg?v=ecb6d2db3dc20a262cde0c0b73ad8efc67bcd057b2e7155461db9662a0db86bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
