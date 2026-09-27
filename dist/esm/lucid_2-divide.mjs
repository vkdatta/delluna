export const name="lucid_2-divide";
export const id="dl_4aa54da05b38441799c0";
export const url=new URL("../icons/lucid_2-divide.svg?v=d18c068df8972b65f3fe9aa2f1c75cb88ddd217457bd87148c47cdd797087f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
