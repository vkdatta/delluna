export const name="prompt_suggestion";
export const id="dl_7a194d0221625d83e3d9";
export const url=new URL("../icons/prompt_suggestion.svg?v=6ba01fc2041cc46679ea0b4b9ef524f58f5fbdbc14bfc7a7e2437506749df473",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
