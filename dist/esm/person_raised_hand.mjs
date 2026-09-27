export const name="person_raised_hand";
export const id="dl_b28941e9c2ab0c7ec2fb";
export const url=new URL("../icons/person_raised_hand.svg?v=1555d590dabf69caef91bb590a376b4e4a943a364870d1ce12763e8f9fd30a38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
