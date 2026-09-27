export const name="gender-female-thin";
export const id="dl_4c4dd7ccdf1b46b78c7c";
export const url=new URL("../icons/gender-female-thin.svg?v=9abb9504ec01c859421dbe4ee3bffee76bf32e606d67d1bc56011bee4ffc828a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
