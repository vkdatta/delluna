export const name="discord-logo";
export const id="dl_0a321f720e8741b69684";
export const url=new URL("../../icons/D/discord-logo.svg?v=87ec676ddbed629a61ef09a4b3131db7889e0fb89e8a036c035b34f77c918d24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
