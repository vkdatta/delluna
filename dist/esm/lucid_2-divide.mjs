export const name="lucid_2-divide";
export const id="dl_4aa54da05b38441799c0";
export const url=new URL("../icons/lucid_2-divide.svg?v=635847b793af45b2eb808b51afdc72391e5e7e7b980b9db56a8187b679e4d3f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
