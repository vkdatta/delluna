export const name="pencil-thin";
export const id="dl_27aa7ee378434118a1ee";
export const url=new URL("../icons/pencil-thin.svg?v=f15f7f24c42cff9c8d17e50ef2682f7f7e50c118caae96d119b5598487dcc298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
