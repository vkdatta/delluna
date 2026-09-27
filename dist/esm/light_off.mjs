export const name="light_off";
export const id="dl_343374794fb4df629884";
export const url=new URL("../icons/light_off.svg?v=09ef6d42e5349b2dc7e71a2a329dce44c704eaa84fbe8f7a68e2e077faa15bcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
