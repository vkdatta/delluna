export const name="eyeglasses-thin";
export const id="dl_4e790f8a555a45ee8109";
export const url=new URL("../icons/eyeglasses-thin.svg?v=0f20a35cf1bcbf8be24e2f46afe9fc49cbd44b81bc9e47a4c4701ffe7b6d07d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
