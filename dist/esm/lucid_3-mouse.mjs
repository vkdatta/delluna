export const name="lucid_3-mouse";
export const id="dl_29756c43294249349af0";
export const url=new URL("../icons/lucid_3-mouse.svg?v=aa3c01b28c5754a0afd4ffec1539feb22d5f94def992bda56ddc5450e335c2c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
