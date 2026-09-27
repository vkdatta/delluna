export const name="alternate_email";
export const id="dl_a12548ec2186b8f24161";
export const url=new URL("../icons/alternate_email.svg?v=e208b94580c85268caf8be44b63cef58c43673bcd0d30ecdc17705987f9e3acf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
