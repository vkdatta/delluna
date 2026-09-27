export const name="dice-three-thin";
export const id="dl_eaf1671958394a9c963c";
export const url=new URL("../icons/dice-three-thin.svg?v=fc0dc8848ff9b8bddb820def0831603c840c189561e1e37ebfe816857b23e3a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
