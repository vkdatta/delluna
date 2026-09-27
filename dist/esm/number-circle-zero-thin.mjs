export const name="number-circle-zero-thin";
export const id="dl_a0976d7295bd41d691c8";
export const url=new URL("../icons/number-circle-zero-thin.svg?v=9f396631b7cbbd79d6d4e5f1e8864ff5ce747769c3af6ab39d6e751dfc4f8a56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
