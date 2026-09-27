export const name="ticket-bold";
export const id="dl_41bc03f1ba90e151562d";
export const url=new URL("../icons/ticket-bold.svg?v=7cc9f511f9c391a0c882dd85ebb12401f30df76a53b7b7fb4e6c3604e607bde3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
