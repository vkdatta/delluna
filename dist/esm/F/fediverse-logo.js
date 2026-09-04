export const name="fediverse-logo";
export const id="dl_9c5bfba8405743f0b21a";
export const url=new URL("../../icons/F/fediverse-logo.svg?v=8c97f75fefca50bbad3115368ea99c9586fecf196a3657055ab7cec44521d7fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
