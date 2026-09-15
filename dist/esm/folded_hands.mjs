export const name="folded_hands";
export const id="dl_7b1bc8b61bf64817846e";
export const url=new URL("../icons/F/folded_hands.svg?v=1dd075e53471bdbcf3c65d48ed0a2f9e481181cba0bd9c110c9a453f8f4e29fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
