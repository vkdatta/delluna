export const name="expand_circle_right";
export const id="dl_e29f38380ef6455280d7";
export const url=new URL("../icons/expand_circle_right.svg?v=551ea98a0149e94054124e1bf054c5744b9db76a456342e1d4d57e1c43d45e2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
