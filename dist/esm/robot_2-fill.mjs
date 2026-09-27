export const name="robot_2-fill";
export const id="dl_e49583ea51865a3a5cb2";
export const url=new URL("../icons/robot_2-fill.svg?v=08a393b87f6b3735e343d2888098d5b5909c3443e2cc4e8098b1393e4223c02b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
