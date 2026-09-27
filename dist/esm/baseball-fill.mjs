export const name="baseball-fill";
export const id="dl_7f71bb70666e46129d5e";
export const url=new URL("../icons/baseball-fill.svg?v=d003324cd921815fdbb1527e60153d27f979c37db9233c1076b5d5a7ede700f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
