export const name="television-simple-thin";
export const id="dl_7c6a37a517cf468fa5ce";
export const url=new URL("../icons/T/television-simple-thin.svg?v=b17301e831552309f449c2cb659139a8a42e7b5d6eee19d0e464b4f64f55bdc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
