export const name="crown-simple-light";
export const id="dl_d87181838b4148b29ab1";
export const url=new URL("../icons/crown-simple-light.svg?v=dab380c8c858073ade26720834ecf5cc2819303fc27210db8236a27c27759046",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
