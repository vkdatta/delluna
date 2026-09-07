export const name="equalizer-thin";
export const id="dl_d29bec450eaa4473b722";
export const url=new URL("../icons/equalizer-thin.svg?v=4a7614a9c74a1a69b49ba40fb155e263eb150ced152b0b765518fc4b4c4a775a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
