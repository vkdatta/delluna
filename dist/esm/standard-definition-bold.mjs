export const name="standard-definition-bold";
export const id="dl_377b3dbdfd7f61a38be3";
export const url=new URL("../icons/standard-definition-bold.svg?v=fc5c1109eeca6559c512e6ec8fa6388f6dcf03654fd473bb2eb5aa4883e551e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
