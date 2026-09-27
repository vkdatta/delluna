export const name="yarn-bold";
export const id="dl_4dafcd3d6783e7162ba2";
export const url=new URL("../icons/yarn-bold.svg?v=ba37a2c893a630cd26a9597f7ab10a116fdb3e1c6aef8458d70091476289e7ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
