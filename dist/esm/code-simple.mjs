export const name="code-simple";
export const id="dl_b3517280d91a45dcb74a";
export const url=new URL("../icons/code-simple.svg?v=001ef4f5f72327e3959b763053f8e73a5174fee7544de79955504d56686e78e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
