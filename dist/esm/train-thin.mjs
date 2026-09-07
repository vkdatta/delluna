export const name="train-thin";
export const id="dl_2f667f2657654f508d17";
export const url=new URL("../icons/T/train-thin.svg?v=4acc7c81443edda71d6e41e3f42e0166a46caa512a8f8b7b6069f4cdd8f896a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
