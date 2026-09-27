export const name="umbrella-off";
export const id="dl_ee7352d287214f58a1d1";
export const url=new URL("../icons/umbrella-off.svg?v=f824336ab585675ac32c59550db13f35aeb411457f3ede2e80ea621d0c23808d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
