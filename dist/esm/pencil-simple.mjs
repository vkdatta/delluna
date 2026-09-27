export const name="pencil-simple";
export const id="dl_560b33a61a8a441cb8aa";
export const url=new URL("../icons/pencil-simple.svg?v=9845d41b98d8b07b316e7bcc0111f590d800b58019d30bd19bad00e37e391478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
