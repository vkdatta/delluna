export const name="sports_tennis";
export const id="dl_1d314d0a0cf80a3e5dee";
export const url=new URL("../icons/sports_tennis.svg?v=bfcfc95148cd009e0791217eca7583bcff5f9252dcd6a180f0f2a62dcf3411a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
