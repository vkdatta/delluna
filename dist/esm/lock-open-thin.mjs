export const name="lock-open-thin";
export const id="dl_5bd8653ce81541fe850b";
export const url=new URL("../icons/lock-open-thin.svg?v=0dd1520de26606b542020755b41305b2887469ecfbb886490e5e76315c300e14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
