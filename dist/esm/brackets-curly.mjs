export const name="brackets-curly";
export const id="dl_a0a068903b4f45308a7c";
export const url=new URL("../icons/brackets-curly.svg?v=e025dbe2430a8ac05eb4a252833fd0364693571593cbbe3edce62218d569b515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
