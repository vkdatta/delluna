export const name="body_system";
export const id="dl_0c0cc5aeb9db0a4d63db";
export const url=new URL("../icons/body_system.svg?v=1092666f3ef4630708e82da3cc85632eb850aeada063de174e14803fee59c398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
