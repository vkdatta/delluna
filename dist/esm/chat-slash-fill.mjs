export const name="chat-slash-fill";
export const id="dl_6e7d81cb47b14deeb48f";
export const url=new URL("../icons/chat-slash-fill.svg?v=b1e7cd66452bb36403417151be5d301db8f808cf0bd38f288101030585465c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
